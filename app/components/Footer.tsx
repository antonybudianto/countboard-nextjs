import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center text-gray-800 text-sm dark:text-cyan-50">
      <div>
        Made with{" "}
        <a
          href="https://openai.com/blog/chatgpt/"
          className="font-bold underline"
        >
          ChatGPT
        </a>{" "}
        x{" "}
        <a className="underline" href="https://antonybudianto.com">
          antonybudianto.com
        </a>
        . &copy; {new Date().getFullYear()}.
      </div>
    </footer>
  );
};

export default Footer;
