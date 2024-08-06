export abstract class httpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
