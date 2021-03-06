require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
    @controller = Api::UsersController.new
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post :create, user: { bio: @user.bio, email: @user.email, full_name: @user.full_name, image_path: @user.image_path, password_digest: @user.password_digest }
    end

    assert_redirected_to api_user_path(assigns(:user))
  end

  test "should show user" do
    get :show, id: @user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user
    assert_response :success
  end

  test "should update user" do
    patch :update, id: @user, user: { bio: @user.bio, email: @user.email, full_name: @user.full_name, image_path: @user.image_path, password: @user.password }
    assert_redirected_to api_user_path(assigns(:user))
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete :destroy, id: @user
    end

    assert_redirected_to api_users_path
  end
end
