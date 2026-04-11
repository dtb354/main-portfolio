import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";

type ContactEntry = {
	text: string;
	href?: string;
};

type ContactMethod = {
	label: string;
	Icon: React.ComponentType<{ ariaHidden?: boolean } | { "aria-hidden": boolean }>;
	entries: ContactEntry[];
};

const contactMethods: ContactMethod[] = [
	{
		label: "Email",
		Icon: FaEnvelope,
		entries: [
			{ text: "dqt.standaard@gmail.com", href: "mailto:dqt.standaard@gmail.com" },
			{ text: "danieltran354@gmail.com", href: "mailto:danieltran354@gmail.com" },
		],
	},
	{
		label: "LinkedIn",
		Icon: FaLinkedin,
		entries: [
			{
				text: "linkedin.com/in/daniel-tran-42661a1b5/",
				href: "https://www.linkedin.com/in/daniel-tran-42661a1b5/",
			},
		],
	},
	{
		label: "GitHub",
		Icon: FaGithub,
		entries: [{ text: "github.com/dtb354", href: "https://github.com/dtb354" }],
	},
	{
		label: "Phone",
		Icon: FaPhone,
		entries: [{ text: "+31 06 17095231" }],
	},
];

export default function Contact() {
	return (
		<main className="mx-auto min-h-[calc(100vh-7rem)] w-full max-w-5xl px-6 py-14 sm:px-8">
			<section className="space-y-4">
				<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
					Let&apos;s connect.
				</h1>
				<p className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
					Reach out through any of the channels below. I&apos;m open to recruiter
					conversations, collaboration opportunities, and role discussions.
				</p>
			</section>

			<section className="mt-10 grid gap-4 sm:grid-cols-2">
				{contactMethods.map(({ label, Icon, entries }) => (
					<div
						key={label}
						className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card hover:shadow-md"
					>
						<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-lg text-secondary-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
							<Icon aria-hidden="true" />
						</span>

						<span className="min-w-0">
							<span className="block text-sm font-medium text-foreground/70">
								{label}
							</span>
							<span className="mt-1 block space-y-1">
								{entries.map(({ text, href }, index) =>
									href ? (
										<a
											key={`${label}-${text}-${index}`}
											href={href}
											target={href.startsWith("http") ? "_blank" : undefined}
											rel={href.startsWith("http") ? "noreferrer" : undefined}
											className="block truncate text-base font-semibold text-foreground hover:underline"
										>
											{text}
										</a>
									) : (
										<span
											key={`${label}-${text}-${index}`}
											className="block truncate text-base font-semibold text-foreground"
										>
											{text}
										</span>
									),
								)}
							</span>
						</span>
					</div>
				))}
			</section>
		</main>
	);
}