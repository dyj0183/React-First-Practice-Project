import './Card.css';

const Card = (props) => {
    // we need to make sure other classes names will be applied as well such as expense-item 
    const classes = 'card ' + props.className;

    return (
        // children will be the codes that between opening and closing Card tag, Ex: in Expenses.js
        <div className={classes}>{props.children}</div>
    );
}

export default Card