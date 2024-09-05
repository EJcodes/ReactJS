export default function TabButton({ children, onClick, isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
     <li>
        <button className={isSelected ? 'active' : undefined} onClick={ onClick }>{ children }</button>
    </li>
    );
}