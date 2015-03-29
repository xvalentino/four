json.array!(@users) do |user|
  json.extract! user, :id, :full_name, :password, :email, :bio, :image_path
  json.url user_url(user, format: :json)
end
