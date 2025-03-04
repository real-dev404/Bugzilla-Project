# frozen_string_literal: true

class AddIndexToProjects < ActiveRecord::Migration[5.2]
  def change
    add_index :projects, :name, unique: true
  end
end
