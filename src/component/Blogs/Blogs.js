import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>What is Context API</h2>
            <p>
                1) The React Context API is a way for a React app to effectively produce global variables that can be passed around.<br></br>
                2) This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.<br></br>
                3) React.createContext() -- It returns a consumer and a provider.<br></br>
                4) Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.<br></br>
                5) Consumer as it so happens is a component that consumes and uses the state
            </p>

            <h2>Block and Inline Elements Difference</h2>
            <p>
                1) A block-level element always starts on a new line, and the browsers automatically add some space before and after the element. <br />
                2) A block-level element always takes up the full width available <br></br>
                3) Two commonly used block elements are: 'div' and 'p' tag.<br></br>
                4) An inline element does not start on a new line.<br></br>
                5) An inline element only takes up as much width as necessary.<br></br>
                6) a 'span' tag is inline element.
            </p>
        </div>
    );
};

export default Blogs;