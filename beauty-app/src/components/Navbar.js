import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgba(208, 0, 225, 0.43)", backgroundImage: `url("whitedots.jpg")`}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Beautify Me</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
  }
}
