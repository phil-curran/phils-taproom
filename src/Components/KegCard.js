const KegCard = (props) => {
  const { id, name, style, brewery, description, abv, ibu } = props;
  return (
    <div className="column">
      <div className="box">
        <progress className="progress is-primary" value="15" max="100">
          15%
        </progress>
        <article className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img src="" alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <div className="row">
                <div className="columns">
                  <div className="column is-three-fifths">
                    <p>
                      <strong>
                        {name} - {style}
                      </strong>
                      <br />
                      <small>{brewery}</small>
                    </p>
                  </div>
                  <div className="column is-two-fifths">
                    <div className="field is-grouped is-grouped-multiline">
                      <div className="control">
                        <div className="tags has-addons">
                          <span className="tag is-dark">ABV:</span>
                          <span className="tag is-info">{abv}</span>
                        </div>
                      </div>
                      <div className="control">
                        <div className="tags has-addons">
                          <span className="tag is-dark">IBUs:</span>
                          <span className="tag is-success">{ibu}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="columns">
                  <div className="column">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-small is-link">Details</button>
                </p>
                <p className="control">
                  <button className="button is-small is-danger">Sale</button>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default KegCard;
