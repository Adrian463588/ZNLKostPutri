"use client";

import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";

type MotionWrapperProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

export function MotionWrapper({
	children,
	className,
	delay = 0,
}: MotionWrapperProps) {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{
					type: "spring",
					damping: 24,
					stiffness: 100,
					mass: 1,
					delay,
				}}
				className={cn(className)}
			>
				{children}
			</m.div>
		</LazyMotion>
	);
}
