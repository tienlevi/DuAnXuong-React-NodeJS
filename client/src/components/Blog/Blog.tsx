import { Link } from "react-router-dom";
import "./style.scss";
import "../../_mixin.scss";

function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="section-heading section-blog-heading">
          <h2 className="section-heading__title">Blog</h2>
        </div>
        <div className="section-body">
          <div className="post-list">
            <div className="post-item">
              <div className="post-image">
                <Link to="/">
                  <img
                    src="https://picsum.photos/id/16/665/250"
                    alt=""
                    className="post__thumbnail"
                  />
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <Link to="/" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </Link>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <Link to="/" className="post__readmore">
                  Readmore
                </Link>
              </div>
            </div>
            {/*End .post-item*/}
            <div className="post-item">
              <div className="post-image">
                <Link to="/">
                  <img
                    src="https://picsum.photos/id/17/665/250"
                    className="post__thumbnail"
                  />
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <Link to="/" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </Link>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <Link to="/" className="post__readmore">
                  Readmore
                </Link>
              </div>
            </div>
            {/*End .post-item*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
