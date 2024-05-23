function addToClasses(classList: string[], val?: any, className?: string) {
  val && classList.push(className ? `${className}-${val.toString()}` : val.toString());
}

export { addToClasses };
