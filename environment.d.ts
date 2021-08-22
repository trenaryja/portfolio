declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_SERVICE_ID: string;
			NEXT_PUBLIC_TEMPLATE_ID: string;
			NEXT_PUBLIC_USER_ID: string;
			NODE_ENV: "development" | "production";
		}
	}
}

export {};
