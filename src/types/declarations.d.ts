declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module 'TagCloud' {
  interface TagCloudOptions {
    radius?: number;
    maxSpeed?: 'slow' | 'normal' | 'fast';
    initSpeed?: 'slow' | 'normal' | 'fast';
    keep?: boolean;
  }

  function TagCloud(
    container: string,
    texts: string[],
    options?: TagCloudOptions
  ): void;

  export default TagCloud;
} 