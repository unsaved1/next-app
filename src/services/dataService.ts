const dataService = () => {
    const getAllJokes = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/programming/ten`);
        return res.json();
    }

    const getJoke = async (id: number, ) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/${id}`);
        return res.json();
    }

    const getRandomJoke = async (category: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/${category}/random`);
        return res.json();
    };

    return {getAllJokes, getJoke, getRandomJoke};
}

export default dataService;
