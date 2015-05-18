class VisitorsController < ApplicationController

  skip_before_action :verify_authenticity_token #added to avoid 422 error

  def send_email
    binding.pry
    VisitorMailer.message_from_visitor(params[:body]).deliver_now
  end

end
