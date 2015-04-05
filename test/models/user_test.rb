require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "User can be created" do
    User.destroy_all
    assert_equal 0, User.count
    User.create(full_name: "Jeremy Sux", password: "poop", email: "poopboi@gmail.com", bio: "i'm a fuckboy", image_path: "example.jpg")
    assert_equal 1, User.count

  end
  # test "the truth" do
  #   assert true
  # end
end
