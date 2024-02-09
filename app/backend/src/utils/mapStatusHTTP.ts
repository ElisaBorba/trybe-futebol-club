export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    invalidData: 400,
    unauthorized: 401,
    notFound: 404,
    successful: 200,
    conflict: 409,
    created: 201,
  };
  return statusHTTPMap[status] ?? 500;
}
