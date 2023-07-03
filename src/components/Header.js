
import {Link} from 'react-router-dom';

const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}) => {
    return(
        <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-darkbg">
                {heading}
            </h2>
            <p className="text-center text-sm text-darkbg mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-darkbg hover:text-darkhover">
                {linkName}
            </Link>
            </p>
        </div>
    )
}

export default Header;