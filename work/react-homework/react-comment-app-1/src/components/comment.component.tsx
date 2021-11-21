export const Comment = () => {

    const headline = 'Berlin is nice';
    const content = 'I like Berlin rn bla bla bla'
    const author = 'Kari' 
    
    return (
        <div className='card'>
            <h3>{headline}</h3>
            <p>{content}</p>
            <p className='author'>{author}</p>
        </div>
    )
};  