Rails.application.routes.draw do
  	mount_devise_token_auth_for 'User', at: 'auth'
	root to: "lotteries#index" 
	get 'winner', to: "lotteries#winner"
	get 'last', to: "lotteries#last"
	get 'users', to: "users#index"
	get 'welcum', to: "users#welcum"
	get 'can', to: "bets#possible"
	get 'bets', to: "bets#index"
	get 'user_winner', to: "bets#winner"
	get 'user', to: "users#show"
	post 'new_bet', to: "bets#create"

end
