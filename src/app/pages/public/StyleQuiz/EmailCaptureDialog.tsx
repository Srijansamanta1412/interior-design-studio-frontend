import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";

interface EmailCaptureDialogProps {
  isOpen: boolean;
  whatsappUrl: string;
  onSubmit: () => void;
  onSkip: () => void;
}

export function EmailCaptureDialog({
  isOpen,
  whatsappUrl,
  onSubmit,
  onSkip,
}: EmailCaptureDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[520px] p-0 overflow-hidden bg-background text-foreground border-none shadow-2xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-[#128C7E]" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              Send Your Quiz Results On WhatsApp
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              We'll open WhatsApp with your style quiz choices already added to the message.
            </DialogDescription>
          </div>

          <div className="w-full space-y-4">
            <Button
              asChild
              variant="gold"
              className="w-full py-6 text-sm font-bold tracking-[0.15em] uppercase shadow-none rounded-sm gap-2 disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onSubmit}
              >
                <MessageCircle className="w-4 h-4" />
                Send On WhatsApp
              </a>
            </Button>
          </div>

          <div className="w-full rounded-sm border border-[#25D366]/25 bg-[#25D366]/5 p-4 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#128C7E]" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                You can review and edit the message in WhatsApp before sending it.
              </p>
            </div>
          </div>

          {/* Privacy Footer */}
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-sm">
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </a>
            .
          </p>

          {/* Skip link */}
          <button
            type="button"
            onClick={onSkip}
            className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            No thanks, skip
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
