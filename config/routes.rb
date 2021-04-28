Rails.application.routes.draw do
  root 'pages#home'

  resources :posts, only: %i(new create)
end
