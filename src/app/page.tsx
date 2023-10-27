import Image from "next/image";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export default function Home() {
  const [editor] = useLexicalComposerContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
