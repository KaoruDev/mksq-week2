  class Cookbook

  attr_accessor :title #encapsulation: one of the reasons why OOP is important

  def initialize(title)
    @recipes = {}
    @title = title
  end


  # Creates a list of recipe classes.
  # recipe = A Recipe object.
  def add_recipe(recipe)
    @recipes[recipe.title.to_sym] = recipe
  end

  # List the list of recipes
  def list
    @recipes.each {|key, value|
      puts "Title: #{value}"
    }
  end
end


class Recipe 
  attr_accessor :title, :ingredients, :steps, :calories, :wine, :category

  # Assigns information to Recipe class.

  def initialize(title, ingredients, steps, calories, wine, category)
    @title = title
    @ingredients = ingredients
    @steps = steps
    @calories = calories
    @wine = wine
    @category = category  
  end

  def to_s
    puts @title
  end
end


recipe_banana_bread = Recipe.new("Banana Bread", ["Banana", "Flour", "Eggs", "Sugar"], ["Step1", "Step2", "Step3", "Step4"], 200, "White", "Dessert");
recipe_chicken_taco = Recipe.new("Chicken Tacos", ["Chicken", "Tortillas", "Cheese", "Salsa"], ["Step1", "Step2", "Step3"], 400, "Red", "Entree");
recipe_crab_mushroom = Recipe.new("Crab stuff mushroom", ["Crab", "Mushroom", "Cilantro", "Cream Cheese"], ["Step1", "Step2", "Step3", "Step4"], 500, "Red", "Appetizer")

our_cookbook = Cookbook.new("Becca & Kaoru's Cookbook")
our_cookbook.add_recipe(recipe_banana_bread)
our_cookbook.add_recipe(recipe_chicken_taco)
our_cookbook.add_recipe(recipe_crab_mushroom)

our_cookbook.list

