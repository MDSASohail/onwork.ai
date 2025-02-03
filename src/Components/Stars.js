const StarComponent = ({ x, y, size, opacity }) => {

    const classNameForTwinkling = x % 3;

    console.log("start", classNameForTwinkling)
    
    return (
        <div
        className={classNameForTwinkling === 0 ? "star" : classNameForTwinkling === 1 ? "star2" : "star3"}

            style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${size}px`,
                height: `${size}px`,
                opacity:0
                
            }}
        />
    );
};

export default StarComponent