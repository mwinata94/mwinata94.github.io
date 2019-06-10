export interface IAppState {
  activeMainMenu: boolean;
  activeSubMenu:
    | 'github'
    | 'linkedIn'
    | 'question'
    | 'bug'
    | 'information'
    | 'list'
    | '';
}
