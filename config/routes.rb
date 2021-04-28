Rails.application.routes.draw do
  root 'posts#index'

  resources :posts, only: %i(new create index)
end
