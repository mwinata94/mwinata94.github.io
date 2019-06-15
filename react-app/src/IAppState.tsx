export interface IAppState {
  activeMainMenu: boolean;
  activeSubMenu:
    | 'github'
    | 'linkedin'
    | 'question'
    | 'bug'
    | 'information'
    | 'list'
    | '';
}
