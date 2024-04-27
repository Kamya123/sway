export const MODE = process.env.NEXT_PUBLIC_MODE! as string;

export const BACKEND_NODE_SERVICE_BASE_URL = MODE === 'DEV' ? 'http://localhost:3001' : '';
