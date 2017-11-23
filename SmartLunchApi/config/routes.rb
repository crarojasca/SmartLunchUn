Rails.application.routes.draw do
  resources :turns
  	mount_devise_token_auth_for 'User', at: 'auth'
	root to: "turns#information"
  get 'restaurants', to: 'turns#information'

end
