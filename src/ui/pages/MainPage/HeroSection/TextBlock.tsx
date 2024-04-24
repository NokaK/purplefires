import { TextBlockWrapper } from "./HeroSectionStyles";

interface TextBlockProps {
  title: string;
  content: string;
}

const TextBlock = ({ title, content }: TextBlockProps) => {
  return (
    <TextBlockWrapper>
      <h5>{title}</h5>
      <p>{content}</p>
    </TextBlockWrapper>
  );
};

export default TextBlock;
