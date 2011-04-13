class LearningsController < InheritedResources::Base
  respond_to :html, :xml, :json

  def create
    create!{ learnings_url }
  end

end
