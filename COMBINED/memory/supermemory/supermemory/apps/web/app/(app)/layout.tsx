"use client"

import { EnsureWorkspace } from "@/components/ensure-workspace"
import { MobileBanner } from "@/components/mobile-banner"

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<MobileBanner />
			<EnsureWorkspace>{children}</EnsureWorkspace>
		</>
	)
}
