import { useState, useCallback, useMemo } from "react";
import { quizSteps, type QuizSelection } from "@/services/quizData";
import { StyleQuizForm } from "./StyleQuiz/StyleQuizForm";
import { EmailCaptureDialog } from "./StyleQuiz/EmailCaptureDialog";
import { useNavigate } from "react-router-dom";
import { createWhatsappUrl } from "@/lib/whatsapp";

const TOTAL_STEPS = quizSteps.length;

export default function StyleQuizStart() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<QuizSelection[]>([]);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  const whatsappUrl = useMemo(() => {
    const selectedStyles = selections.map((selection) => {
      const step = quizSteps.find((quizStep) => quizStep.id === selection.stepId);

      if (!step || !selection.selectedOptionId) {
        return `Question ${selection.stepId}: Neither`;
      }

      const selectedOption =
        step.optionA.id === selection.selectedOptionId ? step.optionA : step.optionB;

      return `Question ${selection.stepId}: ${selectedOption.styleLabel}`;
    });

    const messageLines = [
      "Hi, I completed the interior style quiz.",
      "",
      "My quiz choices:",
      ...(selectedStyles.length ? selectedStyles : ["No style choices selected."]),
      "",
      "Please help me understand my interior design style and next steps.",
    ];

    return createWhatsappUrl(messageLines.join("\n"));
  }, [selections]);

  // Handle image selection (Option A or B)
  const handleSelect = useCallback(
    (optionId: string, imageUrl: string) => {
      const selection: QuizSelection = {
        stepId: quizSteps[currentStep].id,
        selectedOptionId: optionId,
        selectedImageUrl: imageUrl,
      };

      setSelections((prev) => [...prev, selection]);

      // Auto-advance after brief delay for visual feedback
      setTimeout(() => {
        if (currentStep < TOTAL_STEPS - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setShowWhatsappModal(true);
        }
      }, 400);
    },
    [currentStep]
  );

  // Handle "Neither" selection
  const handleNeither = useCallback(() => {
    const selection: QuizSelection = {
      stepId: quizSteps[currentStep].id,
      selectedOptionId: null,
      selectedImageUrl: null,
    };

    setSelections((prev) => [...prev, selection]);

    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowWhatsappModal(true);
    }
  }, [currentStep]);

  // Handle "SKIP ALL"
  const handleSkipAll = useCallback(() => {
    setShowWhatsappModal(true);
  }, []);

  // Handle WhatsApp submission
  const handleWhatsappSubmit = useCallback(() => {
    console.log("Quiz results sent to WhatsApp:", { selections });
    setShowWhatsappModal(false);
      navigate("/");
  }, [selections]);

  // Handle skip WhatsApp
  const handleSkipWhatsapp = useCallback(() => {
    console.log("Quiz completed without WhatsApp:", { selections });
    setShowWhatsappModal(false);
    navigate("/");
  }, [selections, navigate]);

  return (
    <>
      <title>Style Quiz | Find Your Interior Design Style</title>
      <meta
        name="description"
        content="Answer 10 quick questions comparing interior design styles to discover your unique decorating aesthetic."
      />

      <div className="flex flex-col w-full min-h-[calc(100vh-5rem)] bg-background">
        {/* Quiz Form — always rendered; modal overlays via portal */}
        <StyleQuizForm
          step={quizSteps[currentStep]}
          currentStepIndex={currentStep}
          totalSteps={TOTAL_STEPS}
          selections={selections}
          onSelect={handleSelect}
          onNeither={handleNeither}
          onSkipAll={handleSkipAll}
        />

        {/* WhatsApp Capture Modal */}
        <EmailCaptureDialog
          isOpen={showWhatsappModal}
          whatsappUrl={whatsappUrl}
          onSubmit={handleWhatsappSubmit}
          onSkip={handleSkipWhatsapp}
        />
      </div>
    </>
  );
}
