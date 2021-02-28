import React from 'react';

function SemaineJumbotron({semaine, date, lien}) {
    return (
        <div class="jumbotron bg-transparent justify-content-center" className="sem-info">
            <h1 class="display-4">{semaine}</h1>
            <p class="lead">{date}</p>
            <h4 class="my-4">
                <p class="lead">
                    <a class="btn btn-outline-success btn-lg" href={lien} role="button">Cliquez ici</a>
                </p>
            </h4>
        </div>
    )
}

export default SemaineJumbotron;