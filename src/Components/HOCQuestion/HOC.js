

const GrayscaleImage = (WrappedComponent)=>{
    function NewComponent(props){
        return(
            <>
                <WrappedComponent style={{filter:'grayscale(100%)'}} {...props}/>
            </>
        )

    }

    return NewComponent;
}

export default GrayscaleImage;