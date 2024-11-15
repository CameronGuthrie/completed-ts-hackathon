export function LogMethod(
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Method "${propertyName}" called with arguments: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
  
    return descriptor;
}
  