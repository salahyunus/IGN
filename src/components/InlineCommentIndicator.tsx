import { Annotation } from "@/components/TextAnnotation";

interface InlineCommentIndicatorProps {
  annotation: Annotation;
}

export function InlineCommentIndicator({
  annotation,
}: InlineCommentIndicatorProps) {
  // Component disabled - no annotation circles will be rendered
  return null;
}
