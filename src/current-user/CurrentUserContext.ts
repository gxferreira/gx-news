import React from "react";
import { CurrentUserDataService } from "./CurrentUserService";
import { CurrentUserType } from "./CurrentUserType";

export const CurrentUserContext = React.createContext({
    currentUser: {} as CurrentUserType,
    currentUserDataService: {} as ReturnType<typeof CurrentUserDataService>
});