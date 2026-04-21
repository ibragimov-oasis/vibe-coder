"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@lib/auth-context"

export function EnsureWorkspace({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const router = useRouter()
	const { session, organizations, isRestoring } = useAuth()

	useEffect(() => {
		if (!session) return
		if (isRestoring || organizations === null) return
		if (organizations.length > 0) return
		if (pathname.startsWith("/onboarding")) return
		router.replace("/onboarding/welcome?step=input")
	}, [session, organizations, isRestoring, pathname, router])

	return children
}
