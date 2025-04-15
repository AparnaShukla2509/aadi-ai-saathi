
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "mr", name: "मराठी" },
  { code: "bn", name: "বাংলা" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
];

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Globe className="h-4 w-4" />
          <span>{languages.find(lang => lang.code === selectedLanguage)?.name || "English"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm dark:bg-gray-900/95">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language.code)}
            className="flex items-center justify-between gap-2 cursor-pointer"
          >
            <span>{language.name}</span>
            {selectedLanguage === language.code && (
              <CheckIcon className="h-4 w-4 text-aadi-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
