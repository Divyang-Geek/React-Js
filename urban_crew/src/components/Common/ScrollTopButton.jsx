const ScrollTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="scrollToTop" title="Back To Top" onClick={scrollToTop}>
                <svg width="24" height="49" viewBox="0 0 24 49" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0.015625L1.30862 10.2812C1.0469 10.5273 0.937526 10.8945 1.02346 11.2422C1.1094 11.5898 1.37503 11.8672 1.71878 11.9648C2.06643 12.0664 2.43753 11.9727 2.69143 11.7188L11 3.74609V47C10.9961 47.3594 11.1836 47.6953
                                                11.4961 47.8789C11.8086 48.0586 12.1914 48.0586 12.5039 47.8789C12.8164 47.6953 13.0039 47.3594 13 47V3.74609L21.3086 11.7188C21.5625 11.9727 21.9336 12.0664 22.2813 11.9648C22.625 11.8672 22.8906 11.5898
                                                22.9766 11.2422C23.0625 10.8945 22.9532 10.5273 22.6914 10.2812L12 0.015625Z"
                    />
                </svg>
            </div>
        </>
    );
};

export default ScrollTopButton;
