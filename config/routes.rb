Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :destroy, :show]  do
      resources :bookshelves, only: [:index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show, :update] do
      resource :shelf_membership, only: [:create, :destroy]
      resource :reviews, only: [:create, :update, :destroy]
      get 'search', on: :collection
    end
    resources :bookshelves, except: [:new, :edit, :index]
  end

  resources :books, only: [:index, :show]
  resources :users, only: [:show] do
    resources :bookshelves, only: [:show, :new]
  end

end
