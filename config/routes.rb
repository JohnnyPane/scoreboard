Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
  	resources :scores, only: [:index, :show, :create]
  	resources :standings, only: [:show, :create, :index]
  	resource :user, only: [:create]
  	resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
