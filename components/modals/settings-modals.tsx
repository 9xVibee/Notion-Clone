"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { useSettings } from "@/hooks/use-settings";
import { Label } from "../ui/label";

import { ModeToggle } from "../mode-toggle";

const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settigns</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex-col flex gap-y-1">
            <Label>Apperance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Jotion looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
