class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :image_path, :nickname
  end
end
