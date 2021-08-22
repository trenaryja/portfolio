export function scrollTo(id: string): void {
	const element = document.getElementById(id);
	const top = element?.getBoundingClientRect().top ?? 0 + window.pageYOffset;

	window.scrollTo({
		top: top,
		behavior: "smooth",
	});
}

export function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
