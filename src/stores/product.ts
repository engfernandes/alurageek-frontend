import { create } from 'zustand';

type State = {
	image: string;
	alt: string;
	title: string;
	price: number;
	slug: string;
};

type Action = {
	updateImage: (image: State['image']) => void;
	updateAlt: (alt: State['alt']) => void;
	updateTitle: (title: State['title']) => void;
	updatePrice: (price: State['price']) => void;
	updateSlug: (slug: State['slug']) => void;
};

const useProductStore = create<State & Action>((set) => ({
	image: '',
	alt: '',
	title: '',
	price: 0,
	slug: '',

	updateImage: (image) => set(() => ({ image: image })),
	updateAlt: (alt) => set(() => ({ alt: alt })),
	updateTitle: (title) => set(() => ({ title: title })),
	updatePrice: (price) => set(() => ({ price: price })),
	updateSlug: (slug) => set(() => ({ slug: slug })),
}));

export default useProductStore;
