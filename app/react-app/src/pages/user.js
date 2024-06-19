import React from "react";

import UserAvatar from "../img/test-user.png";

const User = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h3>Perfil de usuario</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-1"></div>

                    <div class="col-lg-3 col-md-4">
                        <img src={UserAvatar} class="rounded" width="200" height="200"/>
                    </div>

                    <div class="col-lg-7 col-md-6">
                        <h5 class="mt-3">vic42</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div class="col-1"></div>
                </div>

                <div class="row mb-5">
                    <div class="col-1"></div>

                    <div class="col-10">
                        <a class="btn rounded bg-dark text-white float-right" href="/user-edit">Editar perfil</a>
                    </div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </main>
    );
};

export default User;