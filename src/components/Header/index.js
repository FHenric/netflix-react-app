import './Header.css'
// eslint-disable-next-line
export default ({black}) => {
    return (
        <header className={black ? "black" : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix'/>
                </a>
            </div>

            <div className='header--user'>
                <a href="/">
                {/* // eslint-disable-next-line */}
                    <img src='../../assets/user.jpg' alt="user"/>
                </a>
            </div>
        </header>
    )
}
// eslint-disable-next-line